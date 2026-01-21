'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13136<T> = T extends (infer U)[]
  ? DeepReadonlyArray13136<U>
  : T extends object
  ? DeepReadonlyObject13136<T>
  : T;

interface DeepReadonlyArray13136<T> extends ReadonlyArray<DeepReadonly13136<T>> {}

type DeepReadonlyObject13136<T> = {
  readonly [P in keyof T]: DeepReadonly13136<T[P]>;
};

type UnionToIntersection13136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13136<T> = UnionToIntersection13136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13136<T extends unknown[], V> = [...T, V];

type TuplifyUnion13136<T, L = LastOf13136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13136<TuplifyUnion13136<Exclude<T, L>>, L>;

type DeepPartial13136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13136<T[P]> }
  : T;

type Paths13136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13136<K, Paths13136<T[K], Prev13136[D]>> : never }[keyof T]
  : never;

type Prev13136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13136 {
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

type ConfigPaths13136 = Paths13136<NestedConfig13136>;

interface HeavyProps13136 {
  config: DeepPartial13136<NestedConfig13136>;
  path?: ConfigPaths13136;
}

const HeavyComponent13136 = memo(function HeavyComponent13136({ config }: HeavyProps13136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13136.displayName = 'HeavyComponent13136';
export default HeavyComponent13136;
