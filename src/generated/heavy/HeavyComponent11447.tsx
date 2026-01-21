'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11447<T> = T extends (infer U)[]
  ? DeepReadonlyArray11447<U>
  : T extends object
  ? DeepReadonlyObject11447<T>
  : T;

interface DeepReadonlyArray11447<T> extends ReadonlyArray<DeepReadonly11447<T>> {}

type DeepReadonlyObject11447<T> = {
  readonly [P in keyof T]: DeepReadonly11447<T[P]>;
};

type UnionToIntersection11447<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11447<T> = UnionToIntersection11447<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11447<T extends unknown[], V> = [...T, V];

type TuplifyUnion11447<T, L = LastOf11447<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11447<TuplifyUnion11447<Exclude<T, L>>, L>;

type DeepPartial11447<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11447<T[P]> }
  : T;

type Paths11447<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11447<K, Paths11447<T[K], Prev11447[D]>> : never }[keyof T]
  : never;

type Prev11447 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11447<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11447 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11447 = Paths11447<NestedConfig11447>;

interface HeavyProps11447 {
  config: DeepPartial11447<NestedConfig11447>;
  path?: ConfigPaths11447;
}

const HeavyComponent11447 = memo(function HeavyComponent11447({ config }: HeavyProps11447) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11447) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11447 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11447: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11447.displayName = 'HeavyComponent11447';
export default HeavyComponent11447;
