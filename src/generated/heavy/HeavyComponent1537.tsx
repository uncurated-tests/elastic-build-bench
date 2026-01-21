'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1537<T> = T extends (infer U)[]
  ? DeepReadonlyArray1537<U>
  : T extends object
  ? DeepReadonlyObject1537<T>
  : T;

interface DeepReadonlyArray1537<T> extends ReadonlyArray<DeepReadonly1537<T>> {}

type DeepReadonlyObject1537<T> = {
  readonly [P in keyof T]: DeepReadonly1537<T[P]>;
};

type UnionToIntersection1537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1537<T> = UnionToIntersection1537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1537<T extends unknown[], V> = [...T, V];

type TuplifyUnion1537<T, L = LastOf1537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1537<TuplifyUnion1537<Exclude<T, L>>, L>;

type DeepPartial1537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1537<T[P]> }
  : T;

type Paths1537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1537<K, Paths1537<T[K], Prev1537[D]>> : never }[keyof T]
  : never;

type Prev1537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1537 {
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

type ConfigPaths1537 = Paths1537<NestedConfig1537>;

interface HeavyProps1537 {
  config: DeepPartial1537<NestedConfig1537>;
  path?: ConfigPaths1537;
}

const HeavyComponent1537 = memo(function HeavyComponent1537({ config }: HeavyProps1537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1537.displayName = 'HeavyComponent1537';
export default HeavyComponent1537;
