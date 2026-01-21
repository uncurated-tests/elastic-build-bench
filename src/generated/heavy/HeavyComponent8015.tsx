'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8015<T> = T extends (infer U)[]
  ? DeepReadonlyArray8015<U>
  : T extends object
  ? DeepReadonlyObject8015<T>
  : T;

interface DeepReadonlyArray8015<T> extends ReadonlyArray<DeepReadonly8015<T>> {}

type DeepReadonlyObject8015<T> = {
  readonly [P in keyof T]: DeepReadonly8015<T[P]>;
};

type UnionToIntersection8015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8015<T> = UnionToIntersection8015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8015<T extends unknown[], V> = [...T, V];

type TuplifyUnion8015<T, L = LastOf8015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8015<TuplifyUnion8015<Exclude<T, L>>, L>;

type DeepPartial8015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8015<T[P]> }
  : T;

type Paths8015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8015<K, Paths8015<T[K], Prev8015[D]>> : never }[keyof T]
  : never;

type Prev8015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8015 {
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

type ConfigPaths8015 = Paths8015<NestedConfig8015>;

interface HeavyProps8015 {
  config: DeepPartial8015<NestedConfig8015>;
  path?: ConfigPaths8015;
}

const HeavyComponent8015 = memo(function HeavyComponent8015({ config }: HeavyProps8015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8015.displayName = 'HeavyComponent8015';
export default HeavyComponent8015;
