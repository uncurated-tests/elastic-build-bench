'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly962<T> = T extends (infer U)[]
  ? DeepReadonlyArray962<U>
  : T extends object
  ? DeepReadonlyObject962<T>
  : T;

interface DeepReadonlyArray962<T> extends ReadonlyArray<DeepReadonly962<T>> {}

type DeepReadonlyObject962<T> = {
  readonly [P in keyof T]: DeepReadonly962<T[P]>;
};

type UnionToIntersection962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf962<T> = UnionToIntersection962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push962<T extends unknown[], V> = [...T, V];

type TuplifyUnion962<T, L = LastOf962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push962<TuplifyUnion962<Exclude<T, L>>, L>;

type DeepPartial962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial962<T[P]> }
  : T;

type Paths962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join962<K, Paths962<T[K], Prev962[D]>> : never }[keyof T]
  : never;

type Prev962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig962 {
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

type ConfigPaths962 = Paths962<NestedConfig962>;

interface HeavyProps962 {
  config: DeepPartial962<NestedConfig962>;
  path?: ConfigPaths962;
}

const HeavyComponent962 = memo(function HeavyComponent962({ config }: HeavyProps962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent962.displayName = 'HeavyComponent962';
export default HeavyComponent962;
