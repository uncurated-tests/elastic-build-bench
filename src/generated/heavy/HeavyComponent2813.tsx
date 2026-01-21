'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2813<T> = T extends (infer U)[]
  ? DeepReadonlyArray2813<U>
  : T extends object
  ? DeepReadonlyObject2813<T>
  : T;

interface DeepReadonlyArray2813<T> extends ReadonlyArray<DeepReadonly2813<T>> {}

type DeepReadonlyObject2813<T> = {
  readonly [P in keyof T]: DeepReadonly2813<T[P]>;
};

type UnionToIntersection2813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2813<T> = UnionToIntersection2813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2813<T extends unknown[], V> = [...T, V];

type TuplifyUnion2813<T, L = LastOf2813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2813<TuplifyUnion2813<Exclude<T, L>>, L>;

type DeepPartial2813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2813<T[P]> }
  : T;

type Paths2813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2813<K, Paths2813<T[K], Prev2813[D]>> : never }[keyof T]
  : never;

type Prev2813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2813 {
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

type ConfigPaths2813 = Paths2813<NestedConfig2813>;

interface HeavyProps2813 {
  config: DeepPartial2813<NestedConfig2813>;
  path?: ConfigPaths2813;
}

const HeavyComponent2813 = memo(function HeavyComponent2813({ config }: HeavyProps2813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2813.displayName = 'HeavyComponent2813';
export default HeavyComponent2813;
