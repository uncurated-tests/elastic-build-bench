'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8273<T> = T extends (infer U)[]
  ? DeepReadonlyArray8273<U>
  : T extends object
  ? DeepReadonlyObject8273<T>
  : T;

interface DeepReadonlyArray8273<T> extends ReadonlyArray<DeepReadonly8273<T>> {}

type DeepReadonlyObject8273<T> = {
  readonly [P in keyof T]: DeepReadonly8273<T[P]>;
};

type UnionToIntersection8273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8273<T> = UnionToIntersection8273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8273<T extends unknown[], V> = [...T, V];

type TuplifyUnion8273<T, L = LastOf8273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8273<TuplifyUnion8273<Exclude<T, L>>, L>;

type DeepPartial8273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8273<T[P]> }
  : T;

type Paths8273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8273<K, Paths8273<T[K], Prev8273[D]>> : never }[keyof T]
  : never;

type Prev8273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8273 {
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

type ConfigPaths8273 = Paths8273<NestedConfig8273>;

interface HeavyProps8273 {
  config: DeepPartial8273<NestedConfig8273>;
  path?: ConfigPaths8273;
}

const HeavyComponent8273 = memo(function HeavyComponent8273({ config }: HeavyProps8273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8273.displayName = 'HeavyComponent8273';
export default HeavyComponent8273;
