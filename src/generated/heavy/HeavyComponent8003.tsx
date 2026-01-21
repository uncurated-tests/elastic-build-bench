'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8003<T> = T extends (infer U)[]
  ? DeepReadonlyArray8003<U>
  : T extends object
  ? DeepReadonlyObject8003<T>
  : T;

interface DeepReadonlyArray8003<T> extends ReadonlyArray<DeepReadonly8003<T>> {}

type DeepReadonlyObject8003<T> = {
  readonly [P in keyof T]: DeepReadonly8003<T[P]>;
};

type UnionToIntersection8003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8003<T> = UnionToIntersection8003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8003<T extends unknown[], V> = [...T, V];

type TuplifyUnion8003<T, L = LastOf8003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8003<TuplifyUnion8003<Exclude<T, L>>, L>;

type DeepPartial8003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8003<T[P]> }
  : T;

type Paths8003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8003<K, Paths8003<T[K], Prev8003[D]>> : never }[keyof T]
  : never;

type Prev8003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8003 {
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

type ConfigPaths8003 = Paths8003<NestedConfig8003>;

interface HeavyProps8003 {
  config: DeepPartial8003<NestedConfig8003>;
  path?: ConfigPaths8003;
}

const HeavyComponent8003 = memo(function HeavyComponent8003({ config }: HeavyProps8003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8003.displayName = 'HeavyComponent8003';
export default HeavyComponent8003;
