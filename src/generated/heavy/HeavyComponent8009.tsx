'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8009<T> = T extends (infer U)[]
  ? DeepReadonlyArray8009<U>
  : T extends object
  ? DeepReadonlyObject8009<T>
  : T;

interface DeepReadonlyArray8009<T> extends ReadonlyArray<DeepReadonly8009<T>> {}

type DeepReadonlyObject8009<T> = {
  readonly [P in keyof T]: DeepReadonly8009<T[P]>;
};

type UnionToIntersection8009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8009<T> = UnionToIntersection8009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8009<T extends unknown[], V> = [...T, V];

type TuplifyUnion8009<T, L = LastOf8009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8009<TuplifyUnion8009<Exclude<T, L>>, L>;

type DeepPartial8009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8009<T[P]> }
  : T;

type Paths8009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8009<K, Paths8009<T[K], Prev8009[D]>> : never }[keyof T]
  : never;

type Prev8009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8009 {
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

type ConfigPaths8009 = Paths8009<NestedConfig8009>;

interface HeavyProps8009 {
  config: DeepPartial8009<NestedConfig8009>;
  path?: ConfigPaths8009;
}

const HeavyComponent8009 = memo(function HeavyComponent8009({ config }: HeavyProps8009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8009.displayName = 'HeavyComponent8009';
export default HeavyComponent8009;
