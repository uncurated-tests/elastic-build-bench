'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4873<T> = T extends (infer U)[]
  ? DeepReadonlyArray4873<U>
  : T extends object
  ? DeepReadonlyObject4873<T>
  : T;

interface DeepReadonlyArray4873<T> extends ReadonlyArray<DeepReadonly4873<T>> {}

type DeepReadonlyObject4873<T> = {
  readonly [P in keyof T]: DeepReadonly4873<T[P]>;
};

type UnionToIntersection4873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4873<T> = UnionToIntersection4873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4873<T extends unknown[], V> = [...T, V];

type TuplifyUnion4873<T, L = LastOf4873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4873<TuplifyUnion4873<Exclude<T, L>>, L>;

type DeepPartial4873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4873<T[P]> }
  : T;

type Paths4873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4873<K, Paths4873<T[K], Prev4873[D]>> : never }[keyof T]
  : never;

type Prev4873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4873 {
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

type ConfigPaths4873 = Paths4873<NestedConfig4873>;

interface HeavyProps4873 {
  config: DeepPartial4873<NestedConfig4873>;
  path?: ConfigPaths4873;
}

const HeavyComponent4873 = memo(function HeavyComponent4873({ config }: HeavyProps4873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4873.displayName = 'HeavyComponent4873';
export default HeavyComponent4873;
