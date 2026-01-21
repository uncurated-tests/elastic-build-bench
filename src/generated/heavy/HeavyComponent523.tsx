'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly523<T> = T extends (infer U)[]
  ? DeepReadonlyArray523<U>
  : T extends object
  ? DeepReadonlyObject523<T>
  : T;

interface DeepReadonlyArray523<T> extends ReadonlyArray<DeepReadonly523<T>> {}

type DeepReadonlyObject523<T> = {
  readonly [P in keyof T]: DeepReadonly523<T[P]>;
};

type UnionToIntersection523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf523<T> = UnionToIntersection523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push523<T extends unknown[], V> = [...T, V];

type TuplifyUnion523<T, L = LastOf523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push523<TuplifyUnion523<Exclude<T, L>>, L>;

type DeepPartial523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial523<T[P]> }
  : T;

type Paths523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join523<K, Paths523<T[K], Prev523[D]>> : never }[keyof T]
  : never;

type Prev523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig523 {
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

type ConfigPaths523 = Paths523<NestedConfig523>;

interface HeavyProps523 {
  config: DeepPartial523<NestedConfig523>;
  path?: ConfigPaths523;
}

const HeavyComponent523 = memo(function HeavyComponent523({ config }: HeavyProps523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent523.displayName = 'HeavyComponent523';
export default HeavyComponent523;
