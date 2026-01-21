'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12136<T> = T extends (infer U)[]
  ? DeepReadonlyArray12136<U>
  : T extends object
  ? DeepReadonlyObject12136<T>
  : T;

interface DeepReadonlyArray12136<T> extends ReadonlyArray<DeepReadonly12136<T>> {}

type DeepReadonlyObject12136<T> = {
  readonly [P in keyof T]: DeepReadonly12136<T[P]>;
};

type UnionToIntersection12136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12136<T> = UnionToIntersection12136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12136<T extends unknown[], V> = [...T, V];

type TuplifyUnion12136<T, L = LastOf12136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12136<TuplifyUnion12136<Exclude<T, L>>, L>;

type DeepPartial12136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12136<T[P]> }
  : T;

type Paths12136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12136<K, Paths12136<T[K], Prev12136[D]>> : never }[keyof T]
  : never;

type Prev12136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12136 {
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

type ConfigPaths12136 = Paths12136<NestedConfig12136>;

interface HeavyProps12136 {
  config: DeepPartial12136<NestedConfig12136>;
  path?: ConfigPaths12136;
}

const HeavyComponent12136 = memo(function HeavyComponent12136({ config }: HeavyProps12136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12136.displayName = 'HeavyComponent12136';
export default HeavyComponent12136;
