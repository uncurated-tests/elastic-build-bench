'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3658<T> = T extends (infer U)[]
  ? DeepReadonlyArray3658<U>
  : T extends object
  ? DeepReadonlyObject3658<T>
  : T;

interface DeepReadonlyArray3658<T> extends ReadonlyArray<DeepReadonly3658<T>> {}

type DeepReadonlyObject3658<T> = {
  readonly [P in keyof T]: DeepReadonly3658<T[P]>;
};

type UnionToIntersection3658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3658<T> = UnionToIntersection3658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3658<T extends unknown[], V> = [...T, V];

type TuplifyUnion3658<T, L = LastOf3658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3658<TuplifyUnion3658<Exclude<T, L>>, L>;

type DeepPartial3658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3658<T[P]> }
  : T;

type Paths3658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3658<K, Paths3658<T[K], Prev3658[D]>> : never }[keyof T]
  : never;

type Prev3658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3658 {
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

type ConfigPaths3658 = Paths3658<NestedConfig3658>;

interface HeavyProps3658 {
  config: DeepPartial3658<NestedConfig3658>;
  path?: ConfigPaths3658;
}

const HeavyComponent3658 = memo(function HeavyComponent3658({ config }: HeavyProps3658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3658.displayName = 'HeavyComponent3658';
export default HeavyComponent3658;
