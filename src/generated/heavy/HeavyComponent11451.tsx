'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11451<T> = T extends (infer U)[]
  ? DeepReadonlyArray11451<U>
  : T extends object
  ? DeepReadonlyObject11451<T>
  : T;

interface DeepReadonlyArray11451<T> extends ReadonlyArray<DeepReadonly11451<T>> {}

type DeepReadonlyObject11451<T> = {
  readonly [P in keyof T]: DeepReadonly11451<T[P]>;
};

type UnionToIntersection11451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11451<T> = UnionToIntersection11451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11451<T extends unknown[], V> = [...T, V];

type TuplifyUnion11451<T, L = LastOf11451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11451<TuplifyUnion11451<Exclude<T, L>>, L>;

type DeepPartial11451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11451<T[P]> }
  : T;

type Paths11451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11451<K, Paths11451<T[K], Prev11451[D]>> : never }[keyof T]
  : never;

type Prev11451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11451 {
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

type ConfigPaths11451 = Paths11451<NestedConfig11451>;

interface HeavyProps11451 {
  config: DeepPartial11451<NestedConfig11451>;
  path?: ConfigPaths11451;
}

const HeavyComponent11451 = memo(function HeavyComponent11451({ config }: HeavyProps11451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11451.displayName = 'HeavyComponent11451';
export default HeavyComponent11451;
