'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8278<T> = T extends (infer U)[]
  ? DeepReadonlyArray8278<U>
  : T extends object
  ? DeepReadonlyObject8278<T>
  : T;

interface DeepReadonlyArray8278<T> extends ReadonlyArray<DeepReadonly8278<T>> {}

type DeepReadonlyObject8278<T> = {
  readonly [P in keyof T]: DeepReadonly8278<T[P]>;
};

type UnionToIntersection8278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8278<T> = UnionToIntersection8278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8278<T extends unknown[], V> = [...T, V];

type TuplifyUnion8278<T, L = LastOf8278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8278<TuplifyUnion8278<Exclude<T, L>>, L>;

type DeepPartial8278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8278<T[P]> }
  : T;

type Paths8278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8278<K, Paths8278<T[K], Prev8278[D]>> : never }[keyof T]
  : never;

type Prev8278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8278 {
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

type ConfigPaths8278 = Paths8278<NestedConfig8278>;

interface HeavyProps8278 {
  config: DeepPartial8278<NestedConfig8278>;
  path?: ConfigPaths8278;
}

const HeavyComponent8278 = memo(function HeavyComponent8278({ config }: HeavyProps8278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8278.displayName = 'HeavyComponent8278';
export default HeavyComponent8278;
