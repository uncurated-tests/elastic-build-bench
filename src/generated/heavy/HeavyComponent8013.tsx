'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8013<T> = T extends (infer U)[]
  ? DeepReadonlyArray8013<U>
  : T extends object
  ? DeepReadonlyObject8013<T>
  : T;

interface DeepReadonlyArray8013<T> extends ReadonlyArray<DeepReadonly8013<T>> {}

type DeepReadonlyObject8013<T> = {
  readonly [P in keyof T]: DeepReadonly8013<T[P]>;
};

type UnionToIntersection8013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8013<T> = UnionToIntersection8013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8013<T extends unknown[], V> = [...T, V];

type TuplifyUnion8013<T, L = LastOf8013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8013<TuplifyUnion8013<Exclude<T, L>>, L>;

type DeepPartial8013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8013<T[P]> }
  : T;

type Paths8013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8013<K, Paths8013<T[K], Prev8013[D]>> : never }[keyof T]
  : never;

type Prev8013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8013 {
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

type ConfigPaths8013 = Paths8013<NestedConfig8013>;

interface HeavyProps8013 {
  config: DeepPartial8013<NestedConfig8013>;
  path?: ConfigPaths8013;
}

const HeavyComponent8013 = memo(function HeavyComponent8013({ config }: HeavyProps8013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8013.displayName = 'HeavyComponent8013';
export default HeavyComponent8013;
