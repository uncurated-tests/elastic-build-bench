'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1043<T> = T extends (infer U)[]
  ? DeepReadonlyArray1043<U>
  : T extends object
  ? DeepReadonlyObject1043<T>
  : T;

interface DeepReadonlyArray1043<T> extends ReadonlyArray<DeepReadonly1043<T>> {}

type DeepReadonlyObject1043<T> = {
  readonly [P in keyof T]: DeepReadonly1043<T[P]>;
};

type UnionToIntersection1043<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1043<T> = UnionToIntersection1043<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1043<T extends unknown[], V> = [...T, V];

type TuplifyUnion1043<T, L = LastOf1043<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1043<TuplifyUnion1043<Exclude<T, L>>, L>;

type DeepPartial1043<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1043<T[P]> }
  : T;

type Paths1043<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1043<K, Paths1043<T[K], Prev1043[D]>> : never }[keyof T]
  : never;

type Prev1043 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1043<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1043 {
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

type ConfigPaths1043 = Paths1043<NestedConfig1043>;

interface HeavyProps1043 {
  config: DeepPartial1043<NestedConfig1043>;
  path?: ConfigPaths1043;
}

const HeavyComponent1043 = memo(function HeavyComponent1043({ config }: HeavyProps1043) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1043) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1043 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1043: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1043.displayName = 'HeavyComponent1043';
export default HeavyComponent1043;
