'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8888<T> = T extends (infer U)[]
  ? DeepReadonlyArray8888<U>
  : T extends object
  ? DeepReadonlyObject8888<T>
  : T;

interface DeepReadonlyArray8888<T> extends ReadonlyArray<DeepReadonly8888<T>> {}

type DeepReadonlyObject8888<T> = {
  readonly [P in keyof T]: DeepReadonly8888<T[P]>;
};

type UnionToIntersection8888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8888<T> = UnionToIntersection8888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8888<T extends unknown[], V> = [...T, V];

type TuplifyUnion8888<T, L = LastOf8888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8888<TuplifyUnion8888<Exclude<T, L>>, L>;

type DeepPartial8888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8888<T[P]> }
  : T;

type Paths8888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8888<K, Paths8888<T[K], Prev8888[D]>> : never }[keyof T]
  : never;

type Prev8888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8888 {
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

type ConfigPaths8888 = Paths8888<NestedConfig8888>;

interface HeavyProps8888 {
  config: DeepPartial8888<NestedConfig8888>;
  path?: ConfigPaths8888;
}

const HeavyComponent8888 = memo(function HeavyComponent8888({ config }: HeavyProps8888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8888.displayName = 'HeavyComponent8888';
export default HeavyComponent8888;
