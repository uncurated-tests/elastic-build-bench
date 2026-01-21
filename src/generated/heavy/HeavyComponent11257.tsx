'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11257<T> = T extends (infer U)[]
  ? DeepReadonlyArray11257<U>
  : T extends object
  ? DeepReadonlyObject11257<T>
  : T;

interface DeepReadonlyArray11257<T> extends ReadonlyArray<DeepReadonly11257<T>> {}

type DeepReadonlyObject11257<T> = {
  readonly [P in keyof T]: DeepReadonly11257<T[P]>;
};

type UnionToIntersection11257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11257<T> = UnionToIntersection11257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11257<T extends unknown[], V> = [...T, V];

type TuplifyUnion11257<T, L = LastOf11257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11257<TuplifyUnion11257<Exclude<T, L>>, L>;

type DeepPartial11257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11257<T[P]> }
  : T;

type Paths11257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11257<K, Paths11257<T[K], Prev11257[D]>> : never }[keyof T]
  : never;

type Prev11257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11257 {
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

type ConfigPaths11257 = Paths11257<NestedConfig11257>;

interface HeavyProps11257 {
  config: DeepPartial11257<NestedConfig11257>;
  path?: ConfigPaths11257;
}

const HeavyComponent11257 = memo(function HeavyComponent11257({ config }: HeavyProps11257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11257.displayName = 'HeavyComponent11257';
export default HeavyComponent11257;
