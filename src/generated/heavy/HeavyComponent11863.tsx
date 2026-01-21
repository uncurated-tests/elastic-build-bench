'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11863<T> = T extends (infer U)[]
  ? DeepReadonlyArray11863<U>
  : T extends object
  ? DeepReadonlyObject11863<T>
  : T;

interface DeepReadonlyArray11863<T> extends ReadonlyArray<DeepReadonly11863<T>> {}

type DeepReadonlyObject11863<T> = {
  readonly [P in keyof T]: DeepReadonly11863<T[P]>;
};

type UnionToIntersection11863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11863<T> = UnionToIntersection11863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11863<T extends unknown[], V> = [...T, V];

type TuplifyUnion11863<T, L = LastOf11863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11863<TuplifyUnion11863<Exclude<T, L>>, L>;

type DeepPartial11863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11863<T[P]> }
  : T;

type Paths11863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11863<K, Paths11863<T[K], Prev11863[D]>> : never }[keyof T]
  : never;

type Prev11863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11863 {
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

type ConfigPaths11863 = Paths11863<NestedConfig11863>;

interface HeavyProps11863 {
  config: DeepPartial11863<NestedConfig11863>;
  path?: ConfigPaths11863;
}

const HeavyComponent11863 = memo(function HeavyComponent11863({ config }: HeavyProps11863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11863.displayName = 'HeavyComponent11863';
export default HeavyComponent11863;
