'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8197<T> = T extends (infer U)[]
  ? DeepReadonlyArray8197<U>
  : T extends object
  ? DeepReadonlyObject8197<T>
  : T;

interface DeepReadonlyArray8197<T> extends ReadonlyArray<DeepReadonly8197<T>> {}

type DeepReadonlyObject8197<T> = {
  readonly [P in keyof T]: DeepReadonly8197<T[P]>;
};

type UnionToIntersection8197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8197<T> = UnionToIntersection8197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8197<T extends unknown[], V> = [...T, V];

type TuplifyUnion8197<T, L = LastOf8197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8197<TuplifyUnion8197<Exclude<T, L>>, L>;

type DeepPartial8197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8197<T[P]> }
  : T;

type Paths8197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8197<K, Paths8197<T[K], Prev8197[D]>> : never }[keyof T]
  : never;

type Prev8197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8197 {
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

type ConfigPaths8197 = Paths8197<NestedConfig8197>;

interface HeavyProps8197 {
  config: DeepPartial8197<NestedConfig8197>;
  path?: ConfigPaths8197;
}

const HeavyComponent8197 = memo(function HeavyComponent8197({ config }: HeavyProps8197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8197.displayName = 'HeavyComponent8197';
export default HeavyComponent8197;
