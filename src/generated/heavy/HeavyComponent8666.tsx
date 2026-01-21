'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8666<T> = T extends (infer U)[]
  ? DeepReadonlyArray8666<U>
  : T extends object
  ? DeepReadonlyObject8666<T>
  : T;

interface DeepReadonlyArray8666<T> extends ReadonlyArray<DeepReadonly8666<T>> {}

type DeepReadonlyObject8666<T> = {
  readonly [P in keyof T]: DeepReadonly8666<T[P]>;
};

type UnionToIntersection8666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8666<T> = UnionToIntersection8666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8666<T extends unknown[], V> = [...T, V];

type TuplifyUnion8666<T, L = LastOf8666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8666<TuplifyUnion8666<Exclude<T, L>>, L>;

type DeepPartial8666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8666<T[P]> }
  : T;

type Paths8666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8666<K, Paths8666<T[K], Prev8666[D]>> : never }[keyof T]
  : never;

type Prev8666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8666 {
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

type ConfigPaths8666 = Paths8666<NestedConfig8666>;

interface HeavyProps8666 {
  config: DeepPartial8666<NestedConfig8666>;
  path?: ConfigPaths8666;
}

const HeavyComponent8666 = memo(function HeavyComponent8666({ config }: HeavyProps8666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8666.displayName = 'HeavyComponent8666';
export default HeavyComponent8666;
