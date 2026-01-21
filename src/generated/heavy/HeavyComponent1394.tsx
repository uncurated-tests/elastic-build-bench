'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1394<T> = T extends (infer U)[]
  ? DeepReadonlyArray1394<U>
  : T extends object
  ? DeepReadonlyObject1394<T>
  : T;

interface DeepReadonlyArray1394<T> extends ReadonlyArray<DeepReadonly1394<T>> {}

type DeepReadonlyObject1394<T> = {
  readonly [P in keyof T]: DeepReadonly1394<T[P]>;
};

type UnionToIntersection1394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1394<T> = UnionToIntersection1394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1394<T extends unknown[], V> = [...T, V];

type TuplifyUnion1394<T, L = LastOf1394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1394<TuplifyUnion1394<Exclude<T, L>>, L>;

type DeepPartial1394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1394<T[P]> }
  : T;

type Paths1394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1394<K, Paths1394<T[K], Prev1394[D]>> : never }[keyof T]
  : never;

type Prev1394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1394 {
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

type ConfigPaths1394 = Paths1394<NestedConfig1394>;

interface HeavyProps1394 {
  config: DeepPartial1394<NestedConfig1394>;
  path?: ConfigPaths1394;
}

const HeavyComponent1394 = memo(function HeavyComponent1394({ config }: HeavyProps1394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1394.displayName = 'HeavyComponent1394';
export default HeavyComponent1394;
