'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11136<T> = T extends (infer U)[]
  ? DeepReadonlyArray11136<U>
  : T extends object
  ? DeepReadonlyObject11136<T>
  : T;

interface DeepReadonlyArray11136<T> extends ReadonlyArray<DeepReadonly11136<T>> {}

type DeepReadonlyObject11136<T> = {
  readonly [P in keyof T]: DeepReadonly11136<T[P]>;
};

type UnionToIntersection11136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11136<T> = UnionToIntersection11136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11136<T extends unknown[], V> = [...T, V];

type TuplifyUnion11136<T, L = LastOf11136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11136<TuplifyUnion11136<Exclude<T, L>>, L>;

type DeepPartial11136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11136<T[P]> }
  : T;

type Paths11136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11136<K, Paths11136<T[K], Prev11136[D]>> : never }[keyof T]
  : never;

type Prev11136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11136 {
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

type ConfigPaths11136 = Paths11136<NestedConfig11136>;

interface HeavyProps11136 {
  config: DeepPartial11136<NestedConfig11136>;
  path?: ConfigPaths11136;
}

const HeavyComponent11136 = memo(function HeavyComponent11136({ config }: HeavyProps11136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11136.displayName = 'HeavyComponent11136';
export default HeavyComponent11136;
