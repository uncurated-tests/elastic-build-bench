'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1349<T> = T extends (infer U)[]
  ? DeepReadonlyArray1349<U>
  : T extends object
  ? DeepReadonlyObject1349<T>
  : T;

interface DeepReadonlyArray1349<T> extends ReadonlyArray<DeepReadonly1349<T>> {}

type DeepReadonlyObject1349<T> = {
  readonly [P in keyof T]: DeepReadonly1349<T[P]>;
};

type UnionToIntersection1349<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1349<T> = UnionToIntersection1349<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1349<T extends unknown[], V> = [...T, V];

type TuplifyUnion1349<T, L = LastOf1349<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1349<TuplifyUnion1349<Exclude<T, L>>, L>;

type DeepPartial1349<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1349<T[P]> }
  : T;

type Paths1349<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1349<K, Paths1349<T[K], Prev1349[D]>> : never }[keyof T]
  : never;

type Prev1349 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1349<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1349 {
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

type ConfigPaths1349 = Paths1349<NestedConfig1349>;

interface HeavyProps1349 {
  config: DeepPartial1349<NestedConfig1349>;
  path?: ConfigPaths1349;
}

const HeavyComponent1349 = memo(function HeavyComponent1349({ config }: HeavyProps1349) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1349) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1349 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1349: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1349.displayName = 'HeavyComponent1349';
export default HeavyComponent1349;
