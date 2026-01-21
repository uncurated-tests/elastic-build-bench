'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8780<T> = T extends (infer U)[]
  ? DeepReadonlyArray8780<U>
  : T extends object
  ? DeepReadonlyObject8780<T>
  : T;

interface DeepReadonlyArray8780<T> extends ReadonlyArray<DeepReadonly8780<T>> {}

type DeepReadonlyObject8780<T> = {
  readonly [P in keyof T]: DeepReadonly8780<T[P]>;
};

type UnionToIntersection8780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8780<T> = UnionToIntersection8780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8780<T extends unknown[], V> = [...T, V];

type TuplifyUnion8780<T, L = LastOf8780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8780<TuplifyUnion8780<Exclude<T, L>>, L>;

type DeepPartial8780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8780<T[P]> }
  : T;

type Paths8780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8780<K, Paths8780<T[K], Prev8780[D]>> : never }[keyof T]
  : never;

type Prev8780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8780 {
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

type ConfigPaths8780 = Paths8780<NestedConfig8780>;

interface HeavyProps8780 {
  config: DeepPartial8780<NestedConfig8780>;
  path?: ConfigPaths8780;
}

const HeavyComponent8780 = memo(function HeavyComponent8780({ config }: HeavyProps8780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8780.displayName = 'HeavyComponent8780';
export default HeavyComponent8780;
