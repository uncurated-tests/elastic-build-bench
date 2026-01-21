'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8480<T> = T extends (infer U)[]
  ? DeepReadonlyArray8480<U>
  : T extends object
  ? DeepReadonlyObject8480<T>
  : T;

interface DeepReadonlyArray8480<T> extends ReadonlyArray<DeepReadonly8480<T>> {}

type DeepReadonlyObject8480<T> = {
  readonly [P in keyof T]: DeepReadonly8480<T[P]>;
};

type UnionToIntersection8480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8480<T> = UnionToIntersection8480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8480<T extends unknown[], V> = [...T, V];

type TuplifyUnion8480<T, L = LastOf8480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8480<TuplifyUnion8480<Exclude<T, L>>, L>;

type DeepPartial8480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8480<T[P]> }
  : T;

type Paths8480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8480<K, Paths8480<T[K], Prev8480[D]>> : never }[keyof T]
  : never;

type Prev8480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8480 {
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

type ConfigPaths8480 = Paths8480<NestedConfig8480>;

interface HeavyProps8480 {
  config: DeepPartial8480<NestedConfig8480>;
  path?: ConfigPaths8480;
}

const HeavyComponent8480 = memo(function HeavyComponent8480({ config }: HeavyProps8480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8480.displayName = 'HeavyComponent8480';
export default HeavyComponent8480;
