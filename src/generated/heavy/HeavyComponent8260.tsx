'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8260<T> = T extends (infer U)[]
  ? DeepReadonlyArray8260<U>
  : T extends object
  ? DeepReadonlyObject8260<T>
  : T;

interface DeepReadonlyArray8260<T> extends ReadonlyArray<DeepReadonly8260<T>> {}

type DeepReadonlyObject8260<T> = {
  readonly [P in keyof T]: DeepReadonly8260<T[P]>;
};

type UnionToIntersection8260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8260<T> = UnionToIntersection8260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8260<T extends unknown[], V> = [...T, V];

type TuplifyUnion8260<T, L = LastOf8260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8260<TuplifyUnion8260<Exclude<T, L>>, L>;

type DeepPartial8260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8260<T[P]> }
  : T;

type Paths8260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8260<K, Paths8260<T[K], Prev8260[D]>> : never }[keyof T]
  : never;

type Prev8260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8260 {
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

type ConfigPaths8260 = Paths8260<NestedConfig8260>;

interface HeavyProps8260 {
  config: DeepPartial8260<NestedConfig8260>;
  path?: ConfigPaths8260;
}

const HeavyComponent8260 = memo(function HeavyComponent8260({ config }: HeavyProps8260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8260.displayName = 'HeavyComponent8260';
export default HeavyComponent8260;
