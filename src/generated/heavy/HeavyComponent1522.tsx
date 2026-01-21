'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1522<T> = T extends (infer U)[]
  ? DeepReadonlyArray1522<U>
  : T extends object
  ? DeepReadonlyObject1522<T>
  : T;

interface DeepReadonlyArray1522<T> extends ReadonlyArray<DeepReadonly1522<T>> {}

type DeepReadonlyObject1522<T> = {
  readonly [P in keyof T]: DeepReadonly1522<T[P]>;
};

type UnionToIntersection1522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1522<T> = UnionToIntersection1522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1522<T extends unknown[], V> = [...T, V];

type TuplifyUnion1522<T, L = LastOf1522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1522<TuplifyUnion1522<Exclude<T, L>>, L>;

type DeepPartial1522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1522<T[P]> }
  : T;

type Paths1522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1522<K, Paths1522<T[K], Prev1522[D]>> : never }[keyof T]
  : never;

type Prev1522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1522 {
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

type ConfigPaths1522 = Paths1522<NestedConfig1522>;

interface HeavyProps1522 {
  config: DeepPartial1522<NestedConfig1522>;
  path?: ConfigPaths1522;
}

const HeavyComponent1522 = memo(function HeavyComponent1522({ config }: HeavyProps1522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1522.displayName = 'HeavyComponent1522';
export default HeavyComponent1522;
