'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11602<T> = T extends (infer U)[]
  ? DeepReadonlyArray11602<U>
  : T extends object
  ? DeepReadonlyObject11602<T>
  : T;

interface DeepReadonlyArray11602<T> extends ReadonlyArray<DeepReadonly11602<T>> {}

type DeepReadonlyObject11602<T> = {
  readonly [P in keyof T]: DeepReadonly11602<T[P]>;
};

type UnionToIntersection11602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11602<T> = UnionToIntersection11602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11602<T extends unknown[], V> = [...T, V];

type TuplifyUnion11602<T, L = LastOf11602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11602<TuplifyUnion11602<Exclude<T, L>>, L>;

type DeepPartial11602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11602<T[P]> }
  : T;

type Paths11602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11602<K, Paths11602<T[K], Prev11602[D]>> : never }[keyof T]
  : never;

type Prev11602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11602 {
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

type ConfigPaths11602 = Paths11602<NestedConfig11602>;

interface HeavyProps11602 {
  config: DeepPartial11602<NestedConfig11602>;
  path?: ConfigPaths11602;
}

const HeavyComponent11602 = memo(function HeavyComponent11602({ config }: HeavyProps11602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11602.displayName = 'HeavyComponent11602';
export default HeavyComponent11602;
