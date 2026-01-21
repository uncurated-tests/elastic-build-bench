'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8226<T> = T extends (infer U)[]
  ? DeepReadonlyArray8226<U>
  : T extends object
  ? DeepReadonlyObject8226<T>
  : T;

interface DeepReadonlyArray8226<T> extends ReadonlyArray<DeepReadonly8226<T>> {}

type DeepReadonlyObject8226<T> = {
  readonly [P in keyof T]: DeepReadonly8226<T[P]>;
};

type UnionToIntersection8226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8226<T> = UnionToIntersection8226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8226<T extends unknown[], V> = [...T, V];

type TuplifyUnion8226<T, L = LastOf8226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8226<TuplifyUnion8226<Exclude<T, L>>, L>;

type DeepPartial8226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8226<T[P]> }
  : T;

type Paths8226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8226<K, Paths8226<T[K], Prev8226[D]>> : never }[keyof T]
  : never;

type Prev8226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8226 {
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

type ConfigPaths8226 = Paths8226<NestedConfig8226>;

interface HeavyProps8226 {
  config: DeepPartial8226<NestedConfig8226>;
  path?: ConfigPaths8226;
}

const HeavyComponent8226 = memo(function HeavyComponent8226({ config }: HeavyProps8226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8226.displayName = 'HeavyComponent8226';
export default HeavyComponent8226;
