'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8337<T> = T extends (infer U)[]
  ? DeepReadonlyArray8337<U>
  : T extends object
  ? DeepReadonlyObject8337<T>
  : T;

interface DeepReadonlyArray8337<T> extends ReadonlyArray<DeepReadonly8337<T>> {}

type DeepReadonlyObject8337<T> = {
  readonly [P in keyof T]: DeepReadonly8337<T[P]>;
};

type UnionToIntersection8337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8337<T> = UnionToIntersection8337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8337<T extends unknown[], V> = [...T, V];

type TuplifyUnion8337<T, L = LastOf8337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8337<TuplifyUnion8337<Exclude<T, L>>, L>;

type DeepPartial8337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8337<T[P]> }
  : T;

type Paths8337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8337<K, Paths8337<T[K], Prev8337[D]>> : never }[keyof T]
  : never;

type Prev8337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8337 {
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

type ConfigPaths8337 = Paths8337<NestedConfig8337>;

interface HeavyProps8337 {
  config: DeepPartial8337<NestedConfig8337>;
  path?: ConfigPaths8337;
}

const HeavyComponent8337 = memo(function HeavyComponent8337({ config }: HeavyProps8337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8337.displayName = 'HeavyComponent8337';
export default HeavyComponent8337;
