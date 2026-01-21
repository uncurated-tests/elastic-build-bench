'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2540<T> = T extends (infer U)[]
  ? DeepReadonlyArray2540<U>
  : T extends object
  ? DeepReadonlyObject2540<T>
  : T;

interface DeepReadonlyArray2540<T> extends ReadonlyArray<DeepReadonly2540<T>> {}

type DeepReadonlyObject2540<T> = {
  readonly [P in keyof T]: DeepReadonly2540<T[P]>;
};

type UnionToIntersection2540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2540<T> = UnionToIntersection2540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2540<T extends unknown[], V> = [...T, V];

type TuplifyUnion2540<T, L = LastOf2540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2540<TuplifyUnion2540<Exclude<T, L>>, L>;

type DeepPartial2540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2540<T[P]> }
  : T;

type Paths2540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2540<K, Paths2540<T[K], Prev2540[D]>> : never }[keyof T]
  : never;

type Prev2540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2540 {
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

type ConfigPaths2540 = Paths2540<NestedConfig2540>;

interface HeavyProps2540 {
  config: DeepPartial2540<NestedConfig2540>;
  path?: ConfigPaths2540;
}

const HeavyComponent2540 = memo(function HeavyComponent2540({ config }: HeavyProps2540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2540.displayName = 'HeavyComponent2540';
export default HeavyComponent2540;
