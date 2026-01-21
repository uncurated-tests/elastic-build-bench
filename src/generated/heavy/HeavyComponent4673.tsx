'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4673<T> = T extends (infer U)[]
  ? DeepReadonlyArray4673<U>
  : T extends object
  ? DeepReadonlyObject4673<T>
  : T;

interface DeepReadonlyArray4673<T> extends ReadonlyArray<DeepReadonly4673<T>> {}

type DeepReadonlyObject4673<T> = {
  readonly [P in keyof T]: DeepReadonly4673<T[P]>;
};

type UnionToIntersection4673<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4673<T> = UnionToIntersection4673<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4673<T extends unknown[], V> = [...T, V];

type TuplifyUnion4673<T, L = LastOf4673<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4673<TuplifyUnion4673<Exclude<T, L>>, L>;

type DeepPartial4673<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4673<T[P]> }
  : T;

type Paths4673<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4673<K, Paths4673<T[K], Prev4673[D]>> : never }[keyof T]
  : never;

type Prev4673 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4673<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4673 {
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

type ConfigPaths4673 = Paths4673<NestedConfig4673>;

interface HeavyProps4673 {
  config: DeepPartial4673<NestedConfig4673>;
  path?: ConfigPaths4673;
}

const HeavyComponent4673 = memo(function HeavyComponent4673({ config }: HeavyProps4673) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4673) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4673 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4673: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4673.displayName = 'HeavyComponent4673';
export default HeavyComponent4673;
