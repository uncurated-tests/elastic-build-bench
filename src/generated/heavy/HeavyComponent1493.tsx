'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1493<T> = T extends (infer U)[]
  ? DeepReadonlyArray1493<U>
  : T extends object
  ? DeepReadonlyObject1493<T>
  : T;

interface DeepReadonlyArray1493<T> extends ReadonlyArray<DeepReadonly1493<T>> {}

type DeepReadonlyObject1493<T> = {
  readonly [P in keyof T]: DeepReadonly1493<T[P]>;
};

type UnionToIntersection1493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1493<T> = UnionToIntersection1493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1493<T extends unknown[], V> = [...T, V];

type TuplifyUnion1493<T, L = LastOf1493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1493<TuplifyUnion1493<Exclude<T, L>>, L>;

type DeepPartial1493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1493<T[P]> }
  : T;

type Paths1493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1493<K, Paths1493<T[K], Prev1493[D]>> : never }[keyof T]
  : never;

type Prev1493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1493 {
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

type ConfigPaths1493 = Paths1493<NestedConfig1493>;

interface HeavyProps1493 {
  config: DeepPartial1493<NestedConfig1493>;
  path?: ConfigPaths1493;
}

const HeavyComponent1493 = memo(function HeavyComponent1493({ config }: HeavyProps1493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1493.displayName = 'HeavyComponent1493';
export default HeavyComponent1493;
