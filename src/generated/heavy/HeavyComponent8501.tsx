'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8501<T> = T extends (infer U)[]
  ? DeepReadonlyArray8501<U>
  : T extends object
  ? DeepReadonlyObject8501<T>
  : T;

interface DeepReadonlyArray8501<T> extends ReadonlyArray<DeepReadonly8501<T>> {}

type DeepReadonlyObject8501<T> = {
  readonly [P in keyof T]: DeepReadonly8501<T[P]>;
};

type UnionToIntersection8501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8501<T> = UnionToIntersection8501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8501<T extends unknown[], V> = [...T, V];

type TuplifyUnion8501<T, L = LastOf8501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8501<TuplifyUnion8501<Exclude<T, L>>, L>;

type DeepPartial8501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8501<T[P]> }
  : T;

type Paths8501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8501<K, Paths8501<T[K], Prev8501[D]>> : never }[keyof T]
  : never;

type Prev8501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8501 {
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

type ConfigPaths8501 = Paths8501<NestedConfig8501>;

interface HeavyProps8501 {
  config: DeepPartial8501<NestedConfig8501>;
  path?: ConfigPaths8501;
}

const HeavyComponent8501 = memo(function HeavyComponent8501({ config }: HeavyProps8501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8501.displayName = 'HeavyComponent8501';
export default HeavyComponent8501;
