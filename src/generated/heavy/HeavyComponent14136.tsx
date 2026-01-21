'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14136<T> = T extends (infer U)[]
  ? DeepReadonlyArray14136<U>
  : T extends object
  ? DeepReadonlyObject14136<T>
  : T;

interface DeepReadonlyArray14136<T> extends ReadonlyArray<DeepReadonly14136<T>> {}

type DeepReadonlyObject14136<T> = {
  readonly [P in keyof T]: DeepReadonly14136<T[P]>;
};

type UnionToIntersection14136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14136<T> = UnionToIntersection14136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14136<T extends unknown[], V> = [...T, V];

type TuplifyUnion14136<T, L = LastOf14136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14136<TuplifyUnion14136<Exclude<T, L>>, L>;

type DeepPartial14136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14136<T[P]> }
  : T;

type Paths14136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14136<K, Paths14136<T[K], Prev14136[D]>> : never }[keyof T]
  : never;

type Prev14136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14136 {
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

type ConfigPaths14136 = Paths14136<NestedConfig14136>;

interface HeavyProps14136 {
  config: DeepPartial14136<NestedConfig14136>;
  path?: ConfigPaths14136;
}

const HeavyComponent14136 = memo(function HeavyComponent14136({ config }: HeavyProps14136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14136.displayName = 'HeavyComponent14136';
export default HeavyComponent14136;
