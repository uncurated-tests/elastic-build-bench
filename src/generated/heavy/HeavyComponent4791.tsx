'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4791<T> = T extends (infer U)[]
  ? DeepReadonlyArray4791<U>
  : T extends object
  ? DeepReadonlyObject4791<T>
  : T;

interface DeepReadonlyArray4791<T> extends ReadonlyArray<DeepReadonly4791<T>> {}

type DeepReadonlyObject4791<T> = {
  readonly [P in keyof T]: DeepReadonly4791<T[P]>;
};

type UnionToIntersection4791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4791<T> = UnionToIntersection4791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4791<T extends unknown[], V> = [...T, V];

type TuplifyUnion4791<T, L = LastOf4791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4791<TuplifyUnion4791<Exclude<T, L>>, L>;

type DeepPartial4791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4791<T[P]> }
  : T;

type Paths4791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4791<K, Paths4791<T[K], Prev4791[D]>> : never }[keyof T]
  : never;

type Prev4791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4791 {
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

type ConfigPaths4791 = Paths4791<NestedConfig4791>;

interface HeavyProps4791 {
  config: DeepPartial4791<NestedConfig4791>;
  path?: ConfigPaths4791;
}

const HeavyComponent4791 = memo(function HeavyComponent4791({ config }: HeavyProps4791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4791.displayName = 'HeavyComponent4791';
export default HeavyComponent4791;
