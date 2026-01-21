'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13423<T> = T extends (infer U)[]
  ? DeepReadonlyArray13423<U>
  : T extends object
  ? DeepReadonlyObject13423<T>
  : T;

interface DeepReadonlyArray13423<T> extends ReadonlyArray<DeepReadonly13423<T>> {}

type DeepReadonlyObject13423<T> = {
  readonly [P in keyof T]: DeepReadonly13423<T[P]>;
};

type UnionToIntersection13423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13423<T> = UnionToIntersection13423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13423<T extends unknown[], V> = [...T, V];

type TuplifyUnion13423<T, L = LastOf13423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13423<TuplifyUnion13423<Exclude<T, L>>, L>;

type DeepPartial13423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13423<T[P]> }
  : T;

type Paths13423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13423<K, Paths13423<T[K], Prev13423[D]>> : never }[keyof T]
  : never;

type Prev13423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13423 {
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

type ConfigPaths13423 = Paths13423<NestedConfig13423>;

interface HeavyProps13423 {
  config: DeepPartial13423<NestedConfig13423>;
  path?: ConfigPaths13423;
}

const HeavyComponent13423 = memo(function HeavyComponent13423({ config }: HeavyProps13423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13423.displayName = 'HeavyComponent13423';
export default HeavyComponent13423;
