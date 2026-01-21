'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8920<T> = T extends (infer U)[]
  ? DeepReadonlyArray8920<U>
  : T extends object
  ? DeepReadonlyObject8920<T>
  : T;

interface DeepReadonlyArray8920<T> extends ReadonlyArray<DeepReadonly8920<T>> {}

type DeepReadonlyObject8920<T> = {
  readonly [P in keyof T]: DeepReadonly8920<T[P]>;
};

type UnionToIntersection8920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8920<T> = UnionToIntersection8920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8920<T extends unknown[], V> = [...T, V];

type TuplifyUnion8920<T, L = LastOf8920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8920<TuplifyUnion8920<Exclude<T, L>>, L>;

type DeepPartial8920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8920<T[P]> }
  : T;

type Paths8920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8920<K, Paths8920<T[K], Prev8920[D]>> : never }[keyof T]
  : never;

type Prev8920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8920 {
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

type ConfigPaths8920 = Paths8920<NestedConfig8920>;

interface HeavyProps8920 {
  config: DeepPartial8920<NestedConfig8920>;
  path?: ConfigPaths8920;
}

const HeavyComponent8920 = memo(function HeavyComponent8920({ config }: HeavyProps8920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8920.displayName = 'HeavyComponent8920';
export default HeavyComponent8920;
