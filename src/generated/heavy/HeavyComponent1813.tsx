'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1813<T> = T extends (infer U)[]
  ? DeepReadonlyArray1813<U>
  : T extends object
  ? DeepReadonlyObject1813<T>
  : T;

interface DeepReadonlyArray1813<T> extends ReadonlyArray<DeepReadonly1813<T>> {}

type DeepReadonlyObject1813<T> = {
  readonly [P in keyof T]: DeepReadonly1813<T[P]>;
};

type UnionToIntersection1813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1813<T> = UnionToIntersection1813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1813<T extends unknown[], V> = [...T, V];

type TuplifyUnion1813<T, L = LastOf1813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1813<TuplifyUnion1813<Exclude<T, L>>, L>;

type DeepPartial1813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1813<T[P]> }
  : T;

type Paths1813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1813<K, Paths1813<T[K], Prev1813[D]>> : never }[keyof T]
  : never;

type Prev1813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1813 {
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

type ConfigPaths1813 = Paths1813<NestedConfig1813>;

interface HeavyProps1813 {
  config: DeepPartial1813<NestedConfig1813>;
  path?: ConfigPaths1813;
}

const HeavyComponent1813 = memo(function HeavyComponent1813({ config }: HeavyProps1813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1813.displayName = 'HeavyComponent1813';
export default HeavyComponent1813;
