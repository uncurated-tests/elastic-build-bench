'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2658<T> = T extends (infer U)[]
  ? DeepReadonlyArray2658<U>
  : T extends object
  ? DeepReadonlyObject2658<T>
  : T;

interface DeepReadonlyArray2658<T> extends ReadonlyArray<DeepReadonly2658<T>> {}

type DeepReadonlyObject2658<T> = {
  readonly [P in keyof T]: DeepReadonly2658<T[P]>;
};

type UnionToIntersection2658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2658<T> = UnionToIntersection2658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2658<T extends unknown[], V> = [...T, V];

type TuplifyUnion2658<T, L = LastOf2658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2658<TuplifyUnion2658<Exclude<T, L>>, L>;

type DeepPartial2658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2658<T[P]> }
  : T;

type Paths2658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2658<K, Paths2658<T[K], Prev2658[D]>> : never }[keyof T]
  : never;

type Prev2658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2658 {
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

type ConfigPaths2658 = Paths2658<NestedConfig2658>;

interface HeavyProps2658 {
  config: DeepPartial2658<NestedConfig2658>;
  path?: ConfigPaths2658;
}

const HeavyComponent2658 = memo(function HeavyComponent2658({ config }: HeavyProps2658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2658.displayName = 'HeavyComponent2658';
export default HeavyComponent2658;
