'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8721<T> = T extends (infer U)[]
  ? DeepReadonlyArray8721<U>
  : T extends object
  ? DeepReadonlyObject8721<T>
  : T;

interface DeepReadonlyArray8721<T> extends ReadonlyArray<DeepReadonly8721<T>> {}

type DeepReadonlyObject8721<T> = {
  readonly [P in keyof T]: DeepReadonly8721<T[P]>;
};

type UnionToIntersection8721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8721<T> = UnionToIntersection8721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8721<T extends unknown[], V> = [...T, V];

type TuplifyUnion8721<T, L = LastOf8721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8721<TuplifyUnion8721<Exclude<T, L>>, L>;

type DeepPartial8721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8721<T[P]> }
  : T;

type Paths8721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8721<K, Paths8721<T[K], Prev8721[D]>> : never }[keyof T]
  : never;

type Prev8721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8721 {
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

type ConfigPaths8721 = Paths8721<NestedConfig8721>;

interface HeavyProps8721 {
  config: DeepPartial8721<NestedConfig8721>;
  path?: ConfigPaths8721;
}

const HeavyComponent8721 = memo(function HeavyComponent8721({ config }: HeavyProps8721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8721.displayName = 'HeavyComponent8721';
export default HeavyComponent8721;
