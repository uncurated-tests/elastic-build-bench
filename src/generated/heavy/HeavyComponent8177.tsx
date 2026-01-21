'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8177<T> = T extends (infer U)[]
  ? DeepReadonlyArray8177<U>
  : T extends object
  ? DeepReadonlyObject8177<T>
  : T;

interface DeepReadonlyArray8177<T> extends ReadonlyArray<DeepReadonly8177<T>> {}

type DeepReadonlyObject8177<T> = {
  readonly [P in keyof T]: DeepReadonly8177<T[P]>;
};

type UnionToIntersection8177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8177<T> = UnionToIntersection8177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8177<T extends unknown[], V> = [...T, V];

type TuplifyUnion8177<T, L = LastOf8177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8177<TuplifyUnion8177<Exclude<T, L>>, L>;

type DeepPartial8177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8177<T[P]> }
  : T;

type Paths8177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8177<K, Paths8177<T[K], Prev8177[D]>> : never }[keyof T]
  : never;

type Prev8177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8177 {
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

type ConfigPaths8177 = Paths8177<NestedConfig8177>;

interface HeavyProps8177 {
  config: DeepPartial8177<NestedConfig8177>;
  path?: ConfigPaths8177;
}

const HeavyComponent8177 = memo(function HeavyComponent8177({ config }: HeavyProps8177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8177.displayName = 'HeavyComponent8177';
export default HeavyComponent8177;
