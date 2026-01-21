'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8370<T> = T extends (infer U)[]
  ? DeepReadonlyArray8370<U>
  : T extends object
  ? DeepReadonlyObject8370<T>
  : T;

interface DeepReadonlyArray8370<T> extends ReadonlyArray<DeepReadonly8370<T>> {}

type DeepReadonlyObject8370<T> = {
  readonly [P in keyof T]: DeepReadonly8370<T[P]>;
};

type UnionToIntersection8370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8370<T> = UnionToIntersection8370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8370<T extends unknown[], V> = [...T, V];

type TuplifyUnion8370<T, L = LastOf8370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8370<TuplifyUnion8370<Exclude<T, L>>, L>;

type DeepPartial8370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8370<T[P]> }
  : T;

type Paths8370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8370<K, Paths8370<T[K], Prev8370[D]>> : never }[keyof T]
  : never;

type Prev8370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8370 {
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

type ConfigPaths8370 = Paths8370<NestedConfig8370>;

interface HeavyProps8370 {
  config: DeepPartial8370<NestedConfig8370>;
  path?: ConfigPaths8370;
}

const HeavyComponent8370 = memo(function HeavyComponent8370({ config }: HeavyProps8370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8370.displayName = 'HeavyComponent8370';
export default HeavyComponent8370;
