'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8996<T> = T extends (infer U)[]
  ? DeepReadonlyArray8996<U>
  : T extends object
  ? DeepReadonlyObject8996<T>
  : T;

interface DeepReadonlyArray8996<T> extends ReadonlyArray<DeepReadonly8996<T>> {}

type DeepReadonlyObject8996<T> = {
  readonly [P in keyof T]: DeepReadonly8996<T[P]>;
};

type UnionToIntersection8996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8996<T> = UnionToIntersection8996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8996<T extends unknown[], V> = [...T, V];

type TuplifyUnion8996<T, L = LastOf8996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8996<TuplifyUnion8996<Exclude<T, L>>, L>;

type DeepPartial8996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8996<T[P]> }
  : T;

type Paths8996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8996<K, Paths8996<T[K], Prev8996[D]>> : never }[keyof T]
  : never;

type Prev8996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8996 {
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

type ConfigPaths8996 = Paths8996<NestedConfig8996>;

interface HeavyProps8996 {
  config: DeepPartial8996<NestedConfig8996>;
  path?: ConfigPaths8996;
}

const HeavyComponent8996 = memo(function HeavyComponent8996({ config }: HeavyProps8996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8996.displayName = 'HeavyComponent8996';
export default HeavyComponent8996;
