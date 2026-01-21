'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3540<T> = T extends (infer U)[]
  ? DeepReadonlyArray3540<U>
  : T extends object
  ? DeepReadonlyObject3540<T>
  : T;

interface DeepReadonlyArray3540<T> extends ReadonlyArray<DeepReadonly3540<T>> {}

type DeepReadonlyObject3540<T> = {
  readonly [P in keyof T]: DeepReadonly3540<T[P]>;
};

type UnionToIntersection3540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3540<T> = UnionToIntersection3540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3540<T extends unknown[], V> = [...T, V];

type TuplifyUnion3540<T, L = LastOf3540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3540<TuplifyUnion3540<Exclude<T, L>>, L>;

type DeepPartial3540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3540<T[P]> }
  : T;

type Paths3540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3540<K, Paths3540<T[K], Prev3540[D]>> : never }[keyof T]
  : never;

type Prev3540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3540 {
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

type ConfigPaths3540 = Paths3540<NestedConfig3540>;

interface HeavyProps3540 {
  config: DeepPartial3540<NestedConfig3540>;
  path?: ConfigPaths3540;
}

const HeavyComponent3540 = memo(function HeavyComponent3540({ config }: HeavyProps3540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3540.displayName = 'HeavyComponent3540';
export default HeavyComponent3540;
