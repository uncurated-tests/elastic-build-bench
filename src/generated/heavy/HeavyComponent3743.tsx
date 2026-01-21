'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3743<T> = T extends (infer U)[]
  ? DeepReadonlyArray3743<U>
  : T extends object
  ? DeepReadonlyObject3743<T>
  : T;

interface DeepReadonlyArray3743<T> extends ReadonlyArray<DeepReadonly3743<T>> {}

type DeepReadonlyObject3743<T> = {
  readonly [P in keyof T]: DeepReadonly3743<T[P]>;
};

type UnionToIntersection3743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3743<T> = UnionToIntersection3743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3743<T extends unknown[], V> = [...T, V];

type TuplifyUnion3743<T, L = LastOf3743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3743<TuplifyUnion3743<Exclude<T, L>>, L>;

type DeepPartial3743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3743<T[P]> }
  : T;

type Paths3743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3743<K, Paths3743<T[K], Prev3743[D]>> : never }[keyof T]
  : never;

type Prev3743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3743 {
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

type ConfigPaths3743 = Paths3743<NestedConfig3743>;

interface HeavyProps3743 {
  config: DeepPartial3743<NestedConfig3743>;
  path?: ConfigPaths3743;
}

const HeavyComponent3743 = memo(function HeavyComponent3743({ config }: HeavyProps3743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3743.displayName = 'HeavyComponent3743';
export default HeavyComponent3743;
