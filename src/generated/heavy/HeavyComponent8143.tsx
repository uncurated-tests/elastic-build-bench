'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8143<T> = T extends (infer U)[]
  ? DeepReadonlyArray8143<U>
  : T extends object
  ? DeepReadonlyObject8143<T>
  : T;

interface DeepReadonlyArray8143<T> extends ReadonlyArray<DeepReadonly8143<T>> {}

type DeepReadonlyObject8143<T> = {
  readonly [P in keyof T]: DeepReadonly8143<T[P]>;
};

type UnionToIntersection8143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8143<T> = UnionToIntersection8143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8143<T extends unknown[], V> = [...T, V];

type TuplifyUnion8143<T, L = LastOf8143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8143<TuplifyUnion8143<Exclude<T, L>>, L>;

type DeepPartial8143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8143<T[P]> }
  : T;

type Paths8143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8143<K, Paths8143<T[K], Prev8143[D]>> : never }[keyof T]
  : never;

type Prev8143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8143 {
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

type ConfigPaths8143 = Paths8143<NestedConfig8143>;

interface HeavyProps8143 {
  config: DeepPartial8143<NestedConfig8143>;
  path?: ConfigPaths8143;
}

const HeavyComponent8143 = memo(function HeavyComponent8143({ config }: HeavyProps8143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8143.displayName = 'HeavyComponent8143';
export default HeavyComponent8143;
