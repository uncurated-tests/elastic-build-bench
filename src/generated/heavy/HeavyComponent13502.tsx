'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13502<T> = T extends (infer U)[]
  ? DeepReadonlyArray13502<U>
  : T extends object
  ? DeepReadonlyObject13502<T>
  : T;

interface DeepReadonlyArray13502<T> extends ReadonlyArray<DeepReadonly13502<T>> {}

type DeepReadonlyObject13502<T> = {
  readonly [P in keyof T]: DeepReadonly13502<T[P]>;
};

type UnionToIntersection13502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13502<T> = UnionToIntersection13502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13502<T extends unknown[], V> = [...T, V];

type TuplifyUnion13502<T, L = LastOf13502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13502<TuplifyUnion13502<Exclude<T, L>>, L>;

type DeepPartial13502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13502<T[P]> }
  : T;

type Paths13502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13502<K, Paths13502<T[K], Prev13502[D]>> : never }[keyof T]
  : never;

type Prev13502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13502 {
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

type ConfigPaths13502 = Paths13502<NestedConfig13502>;

interface HeavyProps13502 {
  config: DeepPartial13502<NestedConfig13502>;
  path?: ConfigPaths13502;
}

const HeavyComponent13502 = memo(function HeavyComponent13502({ config }: HeavyProps13502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13502.displayName = 'HeavyComponent13502';
export default HeavyComponent13502;
