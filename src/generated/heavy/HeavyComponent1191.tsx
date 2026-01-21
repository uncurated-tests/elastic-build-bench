'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1191<T> = T extends (infer U)[]
  ? DeepReadonlyArray1191<U>
  : T extends object
  ? DeepReadonlyObject1191<T>
  : T;

interface DeepReadonlyArray1191<T> extends ReadonlyArray<DeepReadonly1191<T>> {}

type DeepReadonlyObject1191<T> = {
  readonly [P in keyof T]: DeepReadonly1191<T[P]>;
};

type UnionToIntersection1191<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1191<T> = UnionToIntersection1191<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1191<T extends unknown[], V> = [...T, V];

type TuplifyUnion1191<T, L = LastOf1191<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1191<TuplifyUnion1191<Exclude<T, L>>, L>;

type DeepPartial1191<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1191<T[P]> }
  : T;

type Paths1191<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1191<K, Paths1191<T[K], Prev1191[D]>> : never }[keyof T]
  : never;

type Prev1191 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1191<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1191 {
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

type ConfigPaths1191 = Paths1191<NestedConfig1191>;

interface HeavyProps1191 {
  config: DeepPartial1191<NestedConfig1191>;
  path?: ConfigPaths1191;
}

const HeavyComponent1191 = memo(function HeavyComponent1191({ config }: HeavyProps1191) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1191) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1191 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1191: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1191.displayName = 'HeavyComponent1191';
export default HeavyComponent1191;
