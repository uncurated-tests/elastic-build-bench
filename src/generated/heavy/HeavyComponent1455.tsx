'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1455<T> = T extends (infer U)[]
  ? DeepReadonlyArray1455<U>
  : T extends object
  ? DeepReadonlyObject1455<T>
  : T;

interface DeepReadonlyArray1455<T> extends ReadonlyArray<DeepReadonly1455<T>> {}

type DeepReadonlyObject1455<T> = {
  readonly [P in keyof T]: DeepReadonly1455<T[P]>;
};

type UnionToIntersection1455<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1455<T> = UnionToIntersection1455<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1455<T extends unknown[], V> = [...T, V];

type TuplifyUnion1455<T, L = LastOf1455<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1455<TuplifyUnion1455<Exclude<T, L>>, L>;

type DeepPartial1455<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1455<T[P]> }
  : T;

type Paths1455<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1455<K, Paths1455<T[K], Prev1455[D]>> : never }[keyof T]
  : never;

type Prev1455 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1455<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1455 {
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

type ConfigPaths1455 = Paths1455<NestedConfig1455>;

interface HeavyProps1455 {
  config: DeepPartial1455<NestedConfig1455>;
  path?: ConfigPaths1455;
}

const HeavyComponent1455 = memo(function HeavyComponent1455({ config }: HeavyProps1455) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1455) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1455 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1455: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1455.displayName = 'HeavyComponent1455';
export default HeavyComponent1455;
