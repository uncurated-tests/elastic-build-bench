'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8139<T> = T extends (infer U)[]
  ? DeepReadonlyArray8139<U>
  : T extends object
  ? DeepReadonlyObject8139<T>
  : T;

interface DeepReadonlyArray8139<T> extends ReadonlyArray<DeepReadonly8139<T>> {}

type DeepReadonlyObject8139<T> = {
  readonly [P in keyof T]: DeepReadonly8139<T[P]>;
};

type UnionToIntersection8139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8139<T> = UnionToIntersection8139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8139<T extends unknown[], V> = [...T, V];

type TuplifyUnion8139<T, L = LastOf8139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8139<TuplifyUnion8139<Exclude<T, L>>, L>;

type DeepPartial8139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8139<T[P]> }
  : T;

type Paths8139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8139<K, Paths8139<T[K], Prev8139[D]>> : never }[keyof T]
  : never;

type Prev8139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8139 {
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

type ConfigPaths8139 = Paths8139<NestedConfig8139>;

interface HeavyProps8139 {
  config: DeepPartial8139<NestedConfig8139>;
  path?: ConfigPaths8139;
}

const HeavyComponent8139 = memo(function HeavyComponent8139({ config }: HeavyProps8139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8139.displayName = 'HeavyComponent8139';
export default HeavyComponent8139;
